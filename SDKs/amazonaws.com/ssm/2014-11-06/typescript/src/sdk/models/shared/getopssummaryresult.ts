import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsEntity } from "./opsentity";


export class GetOpsSummaryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.OpsEntity })
  entities?: OpsEntity[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
