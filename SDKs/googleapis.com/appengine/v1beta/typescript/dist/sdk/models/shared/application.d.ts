import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UrlDispatchRule } from "./urldispatchrule";
import { FeatureSettings } from "./featuresettings";
import { IdentityAwareProxy } from "./identityawareproxy";
export declare enum ApplicationDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    CloudDatastore = "CLOUD_DATASTORE",
    CloudFirestore = "CLOUD_FIRESTORE",
    CloudDatastoreCompatibility = "CLOUD_DATASTORE_COMPATIBILITY"
}
export declare enum ApplicationServingStatusEnum {
    Unspecified = "UNSPECIFIED",
    Serving = "SERVING",
    UserDisabled = "USER_DISABLED",
    SystemDisabled = "SYSTEM_DISABLED"
}
/**
 * An Application resource contains the top-level configuration of an App Engine application.
**/
export declare class Application extends SpeakeasyBase {
    authDomain?: string;
    codeBucket?: string;
    databaseType?: ApplicationDatabaseTypeEnum;
    defaultBucket?: string;
    defaultCookieExpiration?: string;
    defaultHostname?: string;
    dispatchRules?: UrlDispatchRule[];
    featureSettings?: FeatureSettings;
    gcrDomain?: string;
    iap?: IdentityAwareProxy;
    id?: string;
    locationId?: string;
    name?: string;
    serviceAccount?: string;
    servingStatus?: ApplicationServingStatusEnum;
}
