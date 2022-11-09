import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WkHtmlToPdfAdvancedOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=orientation" })
  orientation?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: string;
}
