import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeOfConduct
/** 
 * Code Of Conduct
**/
export class CodeOfConduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
