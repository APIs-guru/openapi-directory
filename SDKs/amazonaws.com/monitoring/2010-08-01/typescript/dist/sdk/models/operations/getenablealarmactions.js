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
export var GetEnableAlarmActionsActionEnum;
(function (GetEnableAlarmActionsActionEnum) {
    GetEnableAlarmActionsActionEnum["EnableAlarmActions"] = "EnableAlarmActions";
})(GetEnableAlarmActionsActionEnum || (GetEnableAlarmActionsActionEnum = {}));
export var GetEnableAlarmActionsVersionEnum;
(function (GetEnableAlarmActionsVersionEnum) {
    GetEnableAlarmActionsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetEnableAlarmActionsVersionEnum || (GetEnableAlarmActionsVersionEnum = {}));
var GetEnableAlarmActionsQueryParams = /** @class */ (function (_super) {
    __extends(GetEnableAlarmActionsQueryParams, _super);
    function GetEnableAlarmActionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AlarmNames" }),
        __metadata("design:type", Array)
    ], GetEnableAlarmActionsQueryParams.prototype, "alarmNames", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsQueryParams.prototype, "version", void 0);
    return GetEnableAlarmActionsQueryParams;
}(SpeakeasyBase));
export { GetEnableAlarmActionsQueryParams };
var GetEnableAlarmActionsHeaders = /** @class */ (function (_super) {
    __extends(GetEnableAlarmActionsHeaders, _super);
    function GetEnableAlarmActionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEnableAlarmActionsHeaders;
}(SpeakeasyBase));
export { GetEnableAlarmActionsHeaders };
var GetEnableAlarmActionsRequest = /** @class */ (function (_super) {
    __extends(GetEnableAlarmActionsRequest, _super);
    function GetEnableAlarmActionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEnableAlarmActionsQueryParams)
    ], GetEnableAlarmActionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEnableAlarmActionsHeaders)
    ], GetEnableAlarmActionsRequest.prototype, "headers", void 0);
    return GetEnableAlarmActionsRequest;
}(SpeakeasyBase));
export { GetEnableAlarmActionsRequest };
var GetEnableAlarmActionsResponse = /** @class */ (function (_super) {
    __extends(GetEnableAlarmActionsResponse, _super);
    function GetEnableAlarmActionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEnableAlarmActionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEnableAlarmActionsResponse.prototype, "statusCode", void 0);
    return GetEnableAlarmActionsResponse;
}(SpeakeasyBase));
export { GetEnableAlarmActionsResponse };
