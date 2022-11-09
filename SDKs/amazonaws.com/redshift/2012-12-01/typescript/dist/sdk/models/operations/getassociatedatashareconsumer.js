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
export var GetAssociateDataShareConsumerActionEnum;
(function (GetAssociateDataShareConsumerActionEnum) {
    GetAssociateDataShareConsumerActionEnum["AssociateDataShareConsumer"] = "AssociateDataShareConsumer";
})(GetAssociateDataShareConsumerActionEnum || (GetAssociateDataShareConsumerActionEnum = {}));
export var GetAssociateDataShareConsumerVersionEnum;
(function (GetAssociateDataShareConsumerVersionEnum) {
    GetAssociateDataShareConsumerVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetAssociateDataShareConsumerVersionEnum || (GetAssociateDataShareConsumerVersionEnum = {}));
var GetAssociateDataShareConsumerQueryParams = /** @class */ (function (_super) {
    __extends(GetAssociateDataShareConsumerQueryParams, _super);
    function GetAssociateDataShareConsumerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AssociateEntireAccount" }),
        __metadata("design:type", Boolean)
    ], GetAssociateDataShareConsumerQueryParams.prototype, "associateEntireAccount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConsumerArn" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerQueryParams.prototype, "consumerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerQueryParams.prototype, "dataShareArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerQueryParams.prototype, "version", void 0);
    return GetAssociateDataShareConsumerQueryParams;
}(SpeakeasyBase));
export { GetAssociateDataShareConsumerQueryParams };
var GetAssociateDataShareConsumerHeaders = /** @class */ (function (_super) {
    __extends(GetAssociateDataShareConsumerHeaders, _super);
    function GetAssociateDataShareConsumerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssociateDataShareConsumerHeaders;
}(SpeakeasyBase));
export { GetAssociateDataShareConsumerHeaders };
var GetAssociateDataShareConsumerRequest = /** @class */ (function (_super) {
    __extends(GetAssociateDataShareConsumerRequest, _super);
    function GetAssociateDataShareConsumerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateDataShareConsumerQueryParams)
    ], GetAssociateDataShareConsumerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssociateDataShareConsumerHeaders)
    ], GetAssociateDataShareConsumerRequest.prototype, "headers", void 0);
    return GetAssociateDataShareConsumerRequest;
}(SpeakeasyBase));
export { GetAssociateDataShareConsumerRequest };
var GetAssociateDataShareConsumerResponse = /** @class */ (function (_super) {
    __extends(GetAssociateDataShareConsumerResponse, _super);
    function GetAssociateDataShareConsumerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAssociateDataShareConsumerResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssociateDataShareConsumerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssociateDataShareConsumerResponse.prototype, "statusCode", void 0);
    return GetAssociateDataShareConsumerResponse;
}(SpeakeasyBase));
export { GetAssociateDataShareConsumerResponse };
