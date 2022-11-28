import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";



export class DeleteApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: ApplicationSummary;
}
