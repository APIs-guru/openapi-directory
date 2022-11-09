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
export var GetSetAlarmStateActionEnum;
(function (GetSetAlarmStateActionEnum) {
    GetSetAlarmStateActionEnum["SetAlarmState"] = "SetAlarmState";
})(GetSetAlarmStateActionEnum || (GetSetAlarmStateActionEnum = {}));
export var GetSetAlarmStateStateValueEnum;
(function (GetSetAlarmStateStateValueEnum) {
    GetSetAlarmStateStateValueEnum["Ok"] = "OK";
    GetSetAlarmStateStateValueEnum["Alarm"] = "ALARM";
    GetSetAlarmStateStateValueEnum["InsufficientData"] = "INSUFFICIENT_DATA";
})(GetSetAlarmStateStateValueEnum || (GetSetAlarmStateStateValueEnum = {}));
export var GetSetAlarmStateVersionEnum;
(function (GetSetAlarmStateVersionEnum) {
    GetSetAlarmStateVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetSetAlarmStateVersionEnum || (GetSetAlarmStateVersionEnum = {}));
var GetSetAlarmStateQueryParams = /** @class */ (function (_super) {
    __extends(GetSetAlarmStateQueryParams, _super);
    function GetSetAlarmStateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AlarmName" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateQueryParams.prototype, "alarmName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StateReason" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateQueryParams.prototype, "stateReason", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StateReasonData" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateQueryParams.prototype, "stateReasonData", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=StateValue" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateQueryParams.prototype, "stateValue", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateQueryParams.prototype, "version", void 0);
    return GetSetAlarmStateQueryParams;
}(SpeakeasyBase));
export { GetSetAlarmStateQueryParams };
var GetSetAlarmStateHeaders = /** @class */ (function (_super) {
    __extends(GetSetAlarmStateHeaders, _super);
    function GetSetAlarmStateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetAlarmStateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetAlarmStateHeaders;
}(SpeakeasyBase));
export { GetSetAlarmStateHeaders };
var GetSetAlarmStateRequest = /** @class */ (function (_super) {
    __extends(GetSetAlarmStateRequest, _super);
    function GetSetAlarmStateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetAlarmStateQueryParams)
    ], GetSetAlarmStateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSetAlarmStateHeaders)
    ], GetSetAlarmStateRequest.prototype, "headers", void 0);
    return GetSetAlarmStateRequest;
}(SpeakeasyBase));
export { GetSetAlarmStateRequest };
var GetSetAlarmStateResponse = /** @class */ (function (_super) {
    __extends(GetSetAlarmStateResponse, _super);
    function GetSetAlarmStateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetSetAlarmStateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSetAlarmStateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSetAlarmStateResponse.prototype, "statusCode", void 0);
    return GetSetAlarmStateResponse;
}(SpeakeasyBase));
export { GetSetAlarmStateResponse };
