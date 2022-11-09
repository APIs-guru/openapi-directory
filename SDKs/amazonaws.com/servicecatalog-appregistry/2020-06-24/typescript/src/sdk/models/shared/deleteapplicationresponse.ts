import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationSummary } from "./applicationsummary";


export class DeleteApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application?: ApplicationSummary;
}
