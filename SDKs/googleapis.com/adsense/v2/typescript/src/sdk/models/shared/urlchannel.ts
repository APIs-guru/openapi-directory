import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UrlChannel
/** 
 * Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.
**/
export class UrlChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;

  @SpeakeasyMetadata({ data: "json, name=uriPattern" })
  uriPattern?: string;
}
