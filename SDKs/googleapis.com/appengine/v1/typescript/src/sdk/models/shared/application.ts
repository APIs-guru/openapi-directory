import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UrlDispatchRule } from "./urldispatchrule";
import { FeatureSettings } from "./featuresettings";
import { IdentityAwareProxy } from "./identityawareproxy";

export enum ApplicationDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED"
,    CloudDatastore = "CLOUD_DATASTORE"
,    CloudFirestore = "CLOUD_FIRESTORE"
,    CloudDatastoreCompatibility = "CLOUD_DATASTORE_COMPATIBILITY"
}

export enum ApplicationServingStatusEnum {
    Unspecified = "UNSPECIFIED"
,    Serving = "SERVING"
,    UserDisabled = "USER_DISABLED"
,    SystemDisabled = "SYSTEM_DISABLED"
}


// Application
/** 
 * An Application resource contains the top-level configuration of an App Engine application.
**/
export class Application extends SpeakeasyBase {
  @Metadata({ data: "json, name=authDomain" })
  authDomain?: string;

  @Metadata({ data: "json, name=codeBucket" })
  codeBucket?: string;

  @Metadata({ data: "json, name=databaseType" })
  databaseType?: ApplicationDatabaseTypeEnum;

  @Metadata({ data: "json, name=defaultBucket" })
  defaultBucket?: string;

  @Metadata({ data: "json, name=defaultCookieExpiration" })
  defaultCookieExpiration?: string;

  @Metadata({ data: "json, name=defaultHostname" })
  defaultHostname?: string;

  @Metadata({ data: "json, name=dispatchRules", elemType: shared.UrlDispatchRule })
  dispatchRules?: UrlDispatchRule[];

  @Metadata({ data: "json, name=featureSettings" })
  featureSettings?: FeatureSettings;

  @Metadata({ data: "json, name=gcrDomain" })
  gcrDomain?: string;

  @Metadata({ data: "json, name=iap" })
  iap?: IdentityAwareProxy;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=servingStatus" })
  servingStatus?: ApplicationServingStatusEnum;
}
