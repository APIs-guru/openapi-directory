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
export var GetModifyCurrentDbClusterCapacityActionEnum;
(function (GetModifyCurrentDbClusterCapacityActionEnum) {
    GetModifyCurrentDbClusterCapacityActionEnum["ModifyCurrentDbClusterCapacity"] = "ModifyCurrentDBClusterCapacity";
})(GetModifyCurrentDbClusterCapacityActionEnum || (GetModifyCurrentDbClusterCapacityActionEnum = {}));
export var GetModifyCurrentDbClusterCapacityVersionEnum;
(function (GetModifyCurrentDbClusterCapacityVersionEnum) {
    GetModifyCurrentDbClusterCapacityVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyCurrentDbClusterCapacityVersionEnum || (GetModifyCurrentDbClusterCapacityVersionEnum = {}));
var GetModifyCurrentDbClusterCapacityQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyCurrentDbClusterCapacityQueryParams, _super);
    function GetModifyCurrentDbClusterCapacityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Capacity" }),
        __metadata("design:type", Number)
    ], GetModifyCurrentDbClusterCapacityQueryParams.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityQueryParams.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecondsBeforeTimeout" }),
        __metadata("design:type", Number)
    ], GetModifyCurrentDbClusterCapacityQueryParams.prototype, "secondsBeforeTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TimeoutAction" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityQueryParams.prototype, "timeoutAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityQueryParams.prototype, "version", void 0);
    return GetModifyCurrentDbClusterCapacityQueryParams;
}(SpeakeasyBase));
export { GetModifyCurrentDbClusterCapacityQueryParams };
var GetModifyCurrentDbClusterCapacityHeaders = /** @class */ (function (_super) {
    __extends(GetModifyCurrentDbClusterCapacityHeaders, _super);
    function GetModifyCurrentDbClusterCapacityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyCurrentDbClusterCapacityHeaders;
}(SpeakeasyBase));
export { GetModifyCurrentDbClusterCapacityHeaders };
var GetModifyCurrentDbClusterCapacityRequest = /** @class */ (function (_super) {
    __extends(GetModifyCurrentDbClusterCapacityRequest, _super);
    function GetModifyCurrentDbClusterCapacityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyCurrentDbClusterCapacityQueryParams)
    ], GetModifyCurrentDbClusterCapacityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyCurrentDbClusterCapacityHeaders)
    ], GetModifyCurrentDbClusterCapacityRequest.prototype, "headers", void 0);
    return GetModifyCurrentDbClusterCapacityRequest;
}(SpeakeasyBase));
export { GetModifyCurrentDbClusterCapacityRequest };
var GetModifyCurrentDbClusterCapacityResponse = /** @class */ (function (_super) {
    __extends(GetModifyCurrentDbClusterCapacityResponse, _super);
    function GetModifyCurrentDbClusterCapacityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyCurrentDbClusterCapacityResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyCurrentDbClusterCapacityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyCurrentDbClusterCapacityResponse.prototype, "statusCode", void 0);
    return GetModifyCurrentDbClusterCapacityResponse;
}(SpeakeasyBase));
export { GetModifyCurrentDbClusterCapacityResponse };
