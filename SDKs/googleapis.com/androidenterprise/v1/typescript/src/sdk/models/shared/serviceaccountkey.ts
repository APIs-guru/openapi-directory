import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ServiceAccountKeyTypeEnum {
    GoogleCredentials = "googleCredentials",
    Pkcs12 = "pkcs12"
}


// ServiceAccountKey
/** 
 * Credentials that can be used to authenticate as a service account.
**/
export class ServiceAccountKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=publicData" })
  publicData?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ServiceAccountKeyTypeEnum;
}
