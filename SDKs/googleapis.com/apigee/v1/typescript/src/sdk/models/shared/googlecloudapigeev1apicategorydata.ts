import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1ApiCategoryData
/** 
 * the Api category resource.
**/
export class GoogleCloudApigeeV1ApiCategoryData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=siteId" })
  siteId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
