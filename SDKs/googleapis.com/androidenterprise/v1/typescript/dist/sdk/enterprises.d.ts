import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Enterprises {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseEnterprisesAcknowledgeNotificationSet - Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
    **/
    androidenterpriseEnterprisesAcknowledgeNotificationSet(req: operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse>;
    /**
     * androidenterpriseEnterprisesCompleteSignup - Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
    **/
    androidenterpriseEnterprisesCompleteSignup(req: operations.AndroidenterpriseEnterprisesCompleteSignupRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesCompleteSignupResponse>;
    /**
     * androidenterpriseEnterprisesCreateWebToken - Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
    **/
    androidenterpriseEnterprisesCreateWebToken(req: operations.AndroidenterpriseEnterprisesCreateWebTokenRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesCreateWebTokenResponse>;
    /**
     * androidenterpriseEnterprisesEnroll - Enrolls an enterprise with the calling EMM.
    **/
    androidenterpriseEnterprisesEnroll(req: operations.AndroidenterpriseEnterprisesEnrollRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesEnrollResponse>;
    /**
     * androidenterpriseEnterprisesGenerateSignupUrl - Generates a sign-up URL.
    **/
    androidenterpriseEnterprisesGenerateSignupUrl(req: operations.AndroidenterpriseEnterprisesGenerateSignupUrlRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesGenerateSignupUrlResponse>;
    /**
     * androidenterpriseEnterprisesGet - Retrieves the name and domain of an enterprise.
    **/
    androidenterpriseEnterprisesGet(req: operations.AndroidenterpriseEnterprisesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesGetResponse>;
    /**
     * androidenterpriseEnterprisesGetServiceAccount - Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
    **/
    androidenterpriseEnterprisesGetServiceAccount(req: operations.AndroidenterpriseEnterprisesGetServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesGetServiceAccountResponse>;
    /**
     * androidenterpriseEnterprisesGetStoreLayout - Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
    **/
    androidenterpriseEnterprisesGetStoreLayout(req: operations.AndroidenterpriseEnterprisesGetStoreLayoutRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesGetStoreLayoutResponse>;
    /**
     * androidenterpriseEnterprisesList - Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
    **/
    androidenterpriseEnterprisesList(req: operations.AndroidenterpriseEnterprisesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesListResponse>;
    /**
     * androidenterpriseEnterprisesPullNotificationSet - Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
    **/
    androidenterpriseEnterprisesPullNotificationSet(req: operations.AndroidenterpriseEnterprisesPullNotificationSetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesPullNotificationSetResponse>;
    /**
     * androidenterpriseEnterprisesSendTestPushNotification - Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
    **/
    androidenterpriseEnterprisesSendTestPushNotification(req: operations.AndroidenterpriseEnterprisesSendTestPushNotificationRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesSendTestPushNotificationResponse>;
    /**
     * androidenterpriseEnterprisesSetAccount - Sets the account that will be used to authenticate to the API as the enterprise.
    **/
    androidenterpriseEnterprisesSetAccount(req: operations.AndroidenterpriseEnterprisesSetAccountRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesSetAccountResponse>;
    /**
     * androidenterpriseEnterprisesSetStoreLayout - Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
    **/
    androidenterpriseEnterprisesSetStoreLayout(req: operations.AndroidenterpriseEnterprisesSetStoreLayoutRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesSetStoreLayoutResponse>;
    /**
     * androidenterpriseEnterprisesUnenroll - Unenrolls an enterprise from the calling EMM.
    **/
    androidenterpriseEnterprisesUnenroll(req: operations.AndroidenterpriseEnterprisesUnenrollRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesUnenrollResponse>;
}
