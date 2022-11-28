import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceParameter } from "./datasourceparameter";
export declare enum DataSourceAuthorizationTypeEnum {
    AuthorizationTypeUnspecified = "AUTHORIZATION_TYPE_UNSPECIFIED",
    AuthorizationCode = "AUTHORIZATION_CODE",
    GooglePlusAuthorizationCode = "GOOGLE_PLUS_AUTHORIZATION_CODE",
    FirstPartyOauth = "FIRST_PARTY_OAUTH"
}
export declare enum DataSourceDataRefreshTypeEnum {
    DataRefreshTypeUnspecified = "DATA_REFRESH_TYPE_UNSPECIFIED",
    SlidingWindow = "SLIDING_WINDOW",
    CustomSlidingWindow = "CUSTOM_SLIDING_WINDOW"
}
export declare enum DataSourceTransferTypeEnum {
    TransferTypeUnspecified = "TRANSFER_TYPE_UNSPECIFIED",
    Batch = "BATCH",
    Streaming = "STREAMING"
}
/**
 * Defines the properties and custom parameters for a data source.
**/
export declare class DataSource extends SpeakeasyBase {
    authorizationType?: DataSourceAuthorizationTypeEnum;
    clientId?: string;
    dataRefreshType?: DataSourceDataRefreshTypeEnum;
    dataSourceId?: string;
    defaultDataRefreshWindowDays?: number;
    defaultSchedule?: string;
    description?: string;
    displayName?: string;
    helpUrl?: string;
    manualRunsDisabled?: boolean;
    minimumScheduleInterval?: string;
    name?: string;
    parameters?: DataSourceParameter[];
    scopes?: string[];
    supportsCustomSchedule?: boolean;
    supportsMultipleTransfers?: boolean;
    transferType?: DataSourceTransferTypeEnum;
    updateDeadlineSeconds?: number;
}
