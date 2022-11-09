import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Finding } from "./finding";


export class GetFindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findings", elemType: shared.Finding })
  findings?: Finding[];
}
