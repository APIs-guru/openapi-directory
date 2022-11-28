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
export var GetModifyDbSnapshotAttributeActionEnum;
(function (GetModifyDbSnapshotAttributeActionEnum) {
    GetModifyDbSnapshotAttributeActionEnum["ModifyDbSnapshotAttribute"] = "ModifyDBSnapshotAttribute";
})(GetModifyDbSnapshotAttributeActionEnum || (GetModifyDbSnapshotAttributeActionEnum = {}));
export var GetModifyDbSnapshotAttributeVersionEnum;
(function (GetModifyDbSnapshotAttributeVersionEnum) {
    GetModifyDbSnapshotAttributeVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyDbSnapshotAttributeVersionEnum || (GetModifyDbSnapshotAttributeVersionEnum = {}));
var GetModifyDbSnapshotAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyDbSnapshotAttributeQueryParams, _super);
    function GetModifyDbSnapshotAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeName" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeQueryParams.prototype, "attributeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeQueryParams.prototype, "dbSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValuesToAdd" }),
        __metadata("design:type", Array)
    ], GetModifyDbSnapshotAttributeQueryParams.prototype, "valuesToAdd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValuesToRemove" }),
        __metadata("design:type", Array)
    ], GetModifyDbSnapshotAttributeQueryParams.prototype, "valuesToRemove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeQueryParams.prototype, "version", void 0);
    return GetModifyDbSnapshotAttributeQueryParams;
}(SpeakeasyBase));
export { GetModifyDbSnapshotAttributeQueryParams };
var GetModifyDbSnapshotAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetModifyDbSnapshotAttributeHeaders, _super);
    function GetModifyDbSnapshotAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyDbSnapshotAttributeHeaders;
}(SpeakeasyBase));
export { GetModifyDbSnapshotAttributeHeaders };
var GetModifyDbSnapshotAttributeRequest = /** @class */ (function (_super) {
    __extends(GetModifyDbSnapshotAttributeRequest, _super);
    function GetModifyDbSnapshotAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbSnapshotAttributeQueryParams)
    ], GetModifyDbSnapshotAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbSnapshotAttributeHeaders)
    ], GetModifyDbSnapshotAttributeRequest.prototype, "headers", void 0);
    return GetModifyDbSnapshotAttributeRequest;
}(SpeakeasyBase));
export { GetModifyDbSnapshotAttributeRequest };
var GetModifyDbSnapshotAttributeResponse = /** @class */ (function (_super) {
    __extends(GetModifyDbSnapshotAttributeResponse, _super);
    function GetModifyDbSnapshotAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyDbSnapshotAttributeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyDbSnapshotAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyDbSnapshotAttributeResponse.prototype, "statusCode", void 0);
    return GetModifyDbSnapshotAttributeResponse;
}(SpeakeasyBase));
export { GetModifyDbSnapshotAttributeResponse };
