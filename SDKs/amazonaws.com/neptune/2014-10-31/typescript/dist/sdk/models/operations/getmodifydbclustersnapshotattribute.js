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
export var GetModifyDbClusterSnapshotAttributeActionEnum;
(function (GetModifyDbClusterSnapshotAttributeActionEnum) {
    GetModifyDbClusterSnapshotAttributeActionEnum["ModifyDbClusterSnapshotAttribute"] = "ModifyDBClusterSnapshotAttribute";
})(GetModifyDbClusterSnapshotAttributeActionEnum || (GetModifyDbClusterSnapshotAttributeActionEnum = {}));
export var GetModifyDbClusterSnapshotAttributeVersionEnum;
(function (GetModifyDbClusterSnapshotAttributeVersionEnum) {
    GetModifyDbClusterSnapshotAttributeVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetModifyDbClusterSnapshotAttributeVersionEnum || (GetModifyDbClusterSnapshotAttributeVersionEnum = {}));
var GetModifyDbClusterSnapshotAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterSnapshotAttributeQueryParams, _super);
    function GetModifyDbClusterSnapshotAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeName" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeQueryParams.prototype, "attributeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeQueryParams.prototype, "dbClusterSnapshotIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValuesToAdd" }),
        __metadata("design:type", Array)
    ], GetModifyDbClusterSnapshotAttributeQueryParams.prototype, "valuesToAdd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ValuesToRemove" }),
        __metadata("design:type", Array)
    ], GetModifyDbClusterSnapshotAttributeQueryParams.prototype, "valuesToRemove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeQueryParams.prototype, "version", void 0);
    return GetModifyDbClusterSnapshotAttributeQueryParams;
}(SpeakeasyBase));
export { GetModifyDbClusterSnapshotAttributeQueryParams };
var GetModifyDbClusterSnapshotAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterSnapshotAttributeHeaders, _super);
    function GetModifyDbClusterSnapshotAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyDbClusterSnapshotAttributeHeaders;
}(SpeakeasyBase));
export { GetModifyDbClusterSnapshotAttributeHeaders };
var GetModifyDbClusterSnapshotAttributeRequest = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterSnapshotAttributeRequest, _super);
    function GetModifyDbClusterSnapshotAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbClusterSnapshotAttributeQueryParams)
    ], GetModifyDbClusterSnapshotAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetModifyDbClusterSnapshotAttributeHeaders)
    ], GetModifyDbClusterSnapshotAttributeRequest.prototype, "headers", void 0);
    return GetModifyDbClusterSnapshotAttributeRequest;
}(SpeakeasyBase));
export { GetModifyDbClusterSnapshotAttributeRequest };
var GetModifyDbClusterSnapshotAttributeResponse = /** @class */ (function (_super) {
    __extends(GetModifyDbClusterSnapshotAttributeResponse, _super);
    function GetModifyDbClusterSnapshotAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetModifyDbClusterSnapshotAttributeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetModifyDbClusterSnapshotAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetModifyDbClusterSnapshotAttributeResponse.prototype, "statusCode", void 0);
    return GetModifyDbClusterSnapshotAttributeResponse;
}(SpeakeasyBase));
export { GetModifyDbClusterSnapshotAttributeResponse };
