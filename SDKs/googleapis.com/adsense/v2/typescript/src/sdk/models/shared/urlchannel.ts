import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UrlChannel
/** 
 * Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.
**/
export class UrlChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;

  @Metadata({ data: "json, name=uriPattern" })
  uriPattern?: string;
}
