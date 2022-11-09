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
export var GetDescribeAlarmsActionEnum;
(function (GetDescribeAlarmsActionEnum) {
    GetDescribeAlarmsActionEnum["DescribeAlarms"] = "DescribeAlarms";
})(GetDescribeAlarmsActionEnum || (GetDescribeAlarmsActionEnum = {}));
export var GetDescribeAlarmsStateValueEnum;
(function (GetDescribeAlarmsStateValueEnum) {
    GetDescribeAlarmsStateValueEnum["Ok"] = "OK";
    GetDescribeAlarmsStateValueEnum["Alarm"] = "ALARM";
    GetDescribeAlarmsStateValueEnum["InsufficientData"] = "INSUFFICIENT_DATA";
})(GetDescribeAlarmsStateValueEnum || (GetDescribeAlarmsStateValueEnum = {}));
export var GetDescribeAlarmsVersionEnum;
(function (GetDescribeAlarmsVersionEnum) {
    GetDescribeAlarmsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetDescribeAlarmsVersionEnum || (GetDescribeAlarmsVersionEnum = {}));
var GetDescribeAlarmsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeAlarmsQueryParams, _super);
    function GetDescribeAlarmsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ActionPrefix" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsQueryParams.prototype, "actionPrefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AlarmNamePrefix" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsQueryParams.prototype, "alarmNamePrefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" }),
        __metadata("design:type", Array)
    ], GetDescribeAlarmsQueryParams.prototype, "alarmNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AlarmTypes" }),
        __metadata("design:type", Array)
    ], GetDescribeAlarmsQueryParams.prototype, "alarmTypes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ChildrenOfAlarmName" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsQueryParams.prototype, "childrenOfAlarmName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeAlarmsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ParentsOfAlarmName" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsQueryParams.prototype, "parentsOfAlarmName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StateValue" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsQueryParams.prototype, "stateValue", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsQueryParams.prototype, "version", void 0);
    return GetDescribeAlarmsQueryParams;
}(SpeakeasyBase));
export { GetDescribeAlarmsQueryParams };
var GetDescribeAlarmsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeAlarmsHeaders, _super);
    function GetDescribeAlarmsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeAlarmsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeAlarmsHeaders;
}(SpeakeasyBase));
export { GetDescribeAlarmsHeaders };
var GetDescribeAlarmsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeAlarmsRequest, _super);
    function GetDescribeAlarmsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAlarmsQueryParams)
    ], GetDescribeAlarmsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeAlarmsHeaders)
    ], GetDescribeAlarmsRequest.prototype, "headers", void 0);
    return GetDescribeAlarmsRequest;
}(SpeakeasyBase));
export { GetDescribeAlarmsRequest };
var GetDescribeAlarmsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeAlarmsResponse, _super);
    function GetDescribeAlarmsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeAlarmsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeAlarmsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeAlarmsResponse.prototype, "statusCode", void 0);
    return GetDescribeAlarmsResponse;
}(SpeakeasyBase));
export { GetDescribeAlarmsResponse };
