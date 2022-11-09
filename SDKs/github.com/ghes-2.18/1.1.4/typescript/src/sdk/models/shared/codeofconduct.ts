import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeOfConduct
/** 
 * Code Of Conduct
**/
export class CodeOfConduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
