import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CodeOfConductSimple
/** 
 * Code of Conduct Simple
**/
export class CodeOfConductSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
