import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WkHtmlToPdfAdvancedOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: string;
}
