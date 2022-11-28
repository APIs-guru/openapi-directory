import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsEntity } from "./opsentity";



export class GetOpsSummaryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: OpsEntity })
  entities?: OpsEntity[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
