import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlDispatchRule } from "./urldispatchrule";
import { FeatureSettings } from "./featuresettings";
import { IdentityAwareProxy } from "./identityawareproxy";


export enum ApplicationDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    CloudDatastore = "CLOUD_DATASTORE",
    CloudFirestore = "CLOUD_FIRESTORE",
    CloudDatastoreCompatibility = "CLOUD_DATASTORE_COMPATIBILITY"
}

export enum ApplicationServingStatusEnum {
    Unspecified = "UNSPECIFIED",
    Serving = "SERVING",
    UserDisabled = "USER_DISABLED",
    SystemDisabled = "SYSTEM_DISABLED"
}


// Application
/** 
 * An Application resource contains the top-level configuration of an App Engine application.
**/
export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authDomain" })
  authDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=codeBucket" })
  codeBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseType" })
  databaseType?: ApplicationDatabaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultBucket" })
  defaultBucket?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCookieExpiration" })
  defaultCookieExpiration?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultHostname" })
  defaultHostname?: string;

  @SpeakeasyMetadata({ data: "json, name=dispatchRules", elemType: UrlDispatchRule })
  dispatchRules?: UrlDispatchRule[];

  @SpeakeasyMetadata({ data: "json, name=featureSettings" })
  featureSettings?: FeatureSettings;

  @SpeakeasyMetadata({ data: "json, name=gcrDomain" })
  gcrDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=iap" })
  iap?: IdentityAwareProxy;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=servingStatus" })
  servingStatus?: ApplicationServingStatusEnum;
}
