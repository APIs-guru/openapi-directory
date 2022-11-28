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
export var GetDisableAlarmActionsActionEnum;
(function (GetDisableAlarmActionsActionEnum) {
    GetDisableAlarmActionsActionEnum["DisableAlarmActions"] = "DisableAlarmActions";
})(GetDisableAlarmActionsActionEnum || (GetDisableAlarmActionsActionEnum = {}));
export var GetDisableAlarmActionsVersionEnum;
(function (GetDisableAlarmActionsVersionEnum) {
    GetDisableAlarmActionsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetDisableAlarmActionsVersionEnum || (GetDisableAlarmActionsVersionEnum = {}));
var GetDisableAlarmActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDisableAlarmActionsQueryParams, _super);
    function GetDisableAlarmActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" }),
        __metadata("design:type", Array)
    ], GetDisableAlarmActionsQueryParams.prototype, "alarmNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsQueryParams.prototype, "version", void 0);
    return GetDisableAlarmActionsQueryParams;
}(SpeakeasyBase));
export { GetDisableAlarmActionsQueryParams };
var GetDisableAlarmActionsHeaders = /** @class */ (function (_super) {
    __extends(GetDisableAlarmActionsHeaders, _super);
    function GetDisableAlarmActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisableAlarmActionsHeaders;
}(SpeakeasyBase));
export { GetDisableAlarmActionsHeaders };
var GetDisableAlarmActionsRequest = /** @class */ (function (_super) {
    __extends(GetDisableAlarmActionsRequest, _super);
    function GetDisableAlarmActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableAlarmActionsQueryParams)
    ], GetDisableAlarmActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisableAlarmActionsHeaders)
    ], GetDisableAlarmActionsRequest.prototype, "headers", void 0);
    return GetDisableAlarmActionsRequest;
}(SpeakeasyBase));
export { GetDisableAlarmActionsRequest };
var GetDisableAlarmActionsResponse = /** @class */ (function (_super) {
    __extends(GetDisableAlarmActionsResponse, _super);
    function GetDisableAlarmActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisableAlarmActionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisableAlarmActionsResponse.prototype, "statusCode", void 0);
    return GetDisableAlarmActionsResponse;
}(SpeakeasyBase));
export { GetDisableAlarmActionsResponse };
