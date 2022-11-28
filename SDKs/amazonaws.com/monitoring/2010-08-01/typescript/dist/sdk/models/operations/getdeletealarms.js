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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var GetDeleteAlarmsActionEnum;
(function (GetDeleteAlarmsActionEnum) {
    GetDeleteAlarmsActionEnum["DeleteAlarms"] = "DeleteAlarms";
})(GetDeleteAlarmsActionEnum || (GetDeleteAlarmsActionEnum = {}));
export var GetDeleteAlarmsVersionEnum;
(function (GetDeleteAlarmsVersionEnum) {
    GetDeleteAlarmsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetDeleteAlarmsVersionEnum || (GetDeleteAlarmsVersionEnum = {}));
var GetDeleteAlarmsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteAlarmsQueryParams, _super);
    function GetDeleteAlarmsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" }),
        __metadata("design:type", Array)
    ], GetDeleteAlarmsQueryParams.prototype, "alarmNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsQueryParams.prototype, "version", void 0);
    return GetDeleteAlarmsQueryParams;
}(SpeakeasyBase));
export { GetDeleteAlarmsQueryParams };
var GetDeleteAlarmsHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteAlarmsHeaders, _super);
    function GetDeleteAlarmsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteAlarmsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteAlarmsHeaders;
}(SpeakeasyBase));
export { GetDeleteAlarmsHeaders };
var GetDeleteAlarmsRequest = /** @class */ (function (_super) {
    __extends(GetDeleteAlarmsRequest, _super);
    function GetDeleteAlarmsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteAlarmsQueryParams)
    ], GetDeleteAlarmsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeleteAlarmsHeaders)
    ], GetDeleteAlarmsRequest.prototype, "headers", void 0);
    return GetDeleteAlarmsRequest;
}(SpeakeasyBase));
export { GetDeleteAlarmsRequest };
var GetDeleteAlarmsResponse = /** @class */ (function (_super) {
    __extends(GetDeleteAlarmsResponse, _super);
    function GetDeleteAlarmsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteAlarmsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeleteAlarmsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeleteAlarmsResponse.prototype, "statusCode", void 0);
    return GetDeleteAlarmsResponse;
}(SpeakeasyBase));
export { GetDeleteAlarmsResponse };
