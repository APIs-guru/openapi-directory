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
export var GetGetAttributesActionEnum;
(function (GetGetAttributesActionEnum) {
    GetGetAttributesActionEnum["GetAttributes"] = "GetAttributes";
})(GetGetAttributesActionEnum || (GetGetAttributesActionEnum = {}));
export var GetGetAttributesVersionEnum;
(function (GetGetAttributesVersionEnum) {
    GetGetAttributesVersionEnum["TwoThousandAndNine0415"] = "2009-04-15";
})(GetGetAttributesVersionEnum || (GetGetAttributesVersionEnum = {}));
var GetGetAttributesQueryParams = /** @class */ (function (_super) {
    __extends(GetGetAttributesQueryParams, _super);
    function GetGetAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttributeNames" }),
        __metadata("design:type", Array)
    ], GetGetAttributesQueryParams.prototype, "attributeNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsistentRead" }),
        __metadata("design:type", Boolean)
    ], GetGetAttributesQueryParams.prototype, "consistentRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainName" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ItemName" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "itemName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetAttributesQueryParams.prototype, "version", void 0);
    return GetGetAttributesQueryParams;
}(SpeakeasyBase));
export { GetGetAttributesQueryParams };
var GetGetAttributesRequest = /** @class */ (function (_super) {
    __extends(GetGetAttributesRequest, _super);
    function GetGetAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGetAttributesQueryParams)
    ], GetGetAttributesRequest.prototype, "queryParams", void 0);
    return GetGetAttributesRequest;
}(SpeakeasyBase));
export { GetGetAttributesRequest };
var GetGetAttributesResponse = /** @class */ (function (_super) {
    __extends(GetGetAttributesResponse, _super);
    function GetGetAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetGetAttributesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGetAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGetAttributesResponse.prototype, "statusCode", void 0);
    return GetGetAttributesResponse;
}(SpeakeasyBase));
export { GetGetAttributesResponse };
