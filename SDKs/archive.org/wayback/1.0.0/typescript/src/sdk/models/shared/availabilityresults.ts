import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArchivedResult } from "./archivedresult";


export class AvailabilityResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.ArchivedResult })
  results: ArchivedResult[];
}
