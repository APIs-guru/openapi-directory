import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EstimationUriApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: string;
}
