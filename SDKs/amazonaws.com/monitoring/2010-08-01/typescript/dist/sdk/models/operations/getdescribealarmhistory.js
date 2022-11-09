var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetDescribeAlarmHistoryActionEnum;
(function (GetDescribeAlarmHistoryActionEnum) {
    GetDescribeAlarmHistoryActionEnum["DescribeAlarmHistory"] = "DescribeAlarmHistory";
})(GetDescribeAlarmHistoryActionEnum || (GetDescribeAlarmHistoryActionEnum = {}));
export var GetDescribeAlarmHistoryHistoryItemTypeEnum;
(function (GetDescribeAlarmHistoryHistoryItemTypeEnum) {
    GetDescribeAlarmHistoryHistoryItemTypeEnum["ConfigurationUpdate"] = "ConfigurationUpdate";
    GetDescribeAlarmHistoryHistoryItemTypeEnum["StateUpdate"] = "StateUpdate";
    GetDescribeAlarmHistoryHistoryItemTypeEnum["Action"] = "Action";
})(GetDescribeAlarmHistoryHistoryItemTypeEnum || (GetDescribeAlarmHistoryHistoryItemTypeEnum = {}));
export var GetDescribeAlarmHistoryScanByEnum;
(function (GetDescribeAlarmHistoryScanByEnum) {
    GetDescribeAlarmHistoryScanByEnum["TimestampDescending"] = "TimestampDescending";
    GetDescribeAlarmHistoryScanByEnum["TimestampAscending"] = "TimestampAscending";
})(GetDescribeAlarmHistoryScanByEnum || (GetDescribeAlarmHistoryScanByEnum = {}));
export var GetDescribeAlarmHistoryVersionEnum;
(function (GetDescribeAlarmHistoryVersionEnum) {
    GetDescribeAlarmHistoryVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetDescribeAlarmHistoryVersionEnum || (GetDescribeAlarmHistoryVersionEnum = {}));
var GetDescribeAlarmHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAlarmHistoryQueryParams, _super);
    function GetDescribeAlarmHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AlarmName" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "alarmName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AlarmTypes" }),
        __metadata("design:type", Array)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "alarmTypes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=HistoryItemType" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "historyItemType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ScanBy" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "scanBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryQueryParams.prototype, "version", void 0);
    return GetDescribeAlarmHistoryQueryParams;
}(SpeakeasyBase));
export { GetDescribeAlarmHistoryQueryParams };
var GetDescribeAlarmHistoryHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAlarmHistoryHeaders, _super);
    function GetDescribeAlarmHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAlarmHistoryHeaders;
}(SpeakeasyBase));
export { GetDescribeAlarmHistoryHeaders };
var GetDescribeAlarmHistoryRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAlarmHistoryRequest, _super);
    function GetDescribeAlarmHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAlarmHistoryQueryParams)
    ], GetDescribeAlarmHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAlarmHistoryHeaders)
    ], GetDescribeAlarmHistoryRequest.prototype, "headers", void 0);
    return GetDescribeAlarmHistoryRequest;
}(SpeakeasyBase));
export { GetDescribeAlarmHistoryRequest };
var GetDescribeAlarmHistoryResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAlarmHistoryResponse, _super);
    function GetDescribeAlarmHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAlarmHistoryResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeAlarmHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeAlarmHistoryResponse.prototype, "statusCode", void 0);
    return GetDescribeAlarmHistoryResponse;
}(SpeakeasyBase));
export { GetDescribeAlarmHistoryResponse };
