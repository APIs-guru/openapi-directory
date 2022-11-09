import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ServiceAccountKeyTypeEnum {
    GoogleCredentials = "googleCredentials"
,    Pkcs12 = "pkcs12"
}


// ServiceAccountKey
/** 
 * Credentials that can be used to authenticate as a service account.
**/
export class ServiceAccountKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=publicData" })
  publicData?: string;

  @Metadata({ data: "json, name=type" })
  type?: ServiceAccountKeyTypeEnum;
}
