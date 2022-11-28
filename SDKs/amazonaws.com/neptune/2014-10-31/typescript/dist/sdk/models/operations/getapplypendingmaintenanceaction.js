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
export var GetApplyPendingMaintenanceActionActionEnum;
(function (GetApplyPendingMaintenanceActionActionEnum) {
    GetApplyPendingMaintenanceActionActionEnum["ApplyPendingMaintenanceAction"] = "ApplyPendingMaintenanceAction";
})(GetApplyPendingMaintenanceActionActionEnum || (GetApplyPendingMaintenanceActionActionEnum = {}));
export var GetApplyPendingMaintenanceActionVersionEnum;
(function (GetApplyPendingMaintenanceActionVersionEnum) {
    GetApplyPendingMaintenanceActionVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetApplyPendingMaintenanceActionVersionEnum || (GetApplyPendingMaintenanceActionVersionEnum = {}));
var GetApplyPendingMaintenanceActionQueryParams = /** @class */ (function (_super) {
    __extends(GetApplyPendingMaintenanceActionQueryParams, _super);
    function GetApplyPendingMaintenanceActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyAction" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionQueryParams.prototype, "applyAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptInType" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionQueryParams.prototype, "optInType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceIdentifier" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionQueryParams.prototype, "resourceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionQueryParams.prototype, "version", void 0);
    return GetApplyPendingMaintenanceActionQueryParams;
}(SpeakeasyBase));
export { GetApplyPendingMaintenanceActionQueryParams };
var GetApplyPendingMaintenanceActionHeaders = /** @class */ (function (_super) {
    __extends(GetApplyPendingMaintenanceActionHeaders, _super);
    function GetApplyPendingMaintenanceActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetApplyPendingMaintenanceActionHeaders;
}(SpeakeasyBase));
export { GetApplyPendingMaintenanceActionHeaders };
var GetApplyPendingMaintenanceActionRequest = /** @class */ (function (_super) {
    __extends(GetApplyPendingMaintenanceActionRequest, _super);
    function GetApplyPendingMaintenanceActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplyPendingMaintenanceActionQueryParams)
    ], GetApplyPendingMaintenanceActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApplyPendingMaintenanceActionHeaders)
    ], GetApplyPendingMaintenanceActionRequest.prototype, "headers", void 0);
    return GetApplyPendingMaintenanceActionRequest;
}(SpeakeasyBase));
export { GetApplyPendingMaintenanceActionRequest };
var GetApplyPendingMaintenanceActionResponse = /** @class */ (function (_super) {
    __extends(GetApplyPendingMaintenanceActionResponse, _super);
    function GetApplyPendingMaintenanceActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApplyPendingMaintenanceActionResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApplyPendingMaintenanceActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApplyPendingMaintenanceActionResponse.prototype, "statusCode", void 0);
    return GetApplyPendingMaintenanceActionResponse;
}(SpeakeasyBase));
export { GetApplyPendingMaintenanceActionResponse };
