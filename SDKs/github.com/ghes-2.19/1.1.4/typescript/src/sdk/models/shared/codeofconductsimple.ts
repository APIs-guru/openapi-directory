import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeOfConductSimple
/** 
 * Code of Conduct Simple
**/
export class CodeOfConductSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
