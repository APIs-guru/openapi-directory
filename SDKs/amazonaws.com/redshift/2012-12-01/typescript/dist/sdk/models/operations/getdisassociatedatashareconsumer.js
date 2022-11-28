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
export var GetDisassociateDataShareConsumerActionEnum;
(function (GetDisassociateDataShareConsumerActionEnum) {
    GetDisassociateDataShareConsumerActionEnum["DisassociateDataShareConsumer"] = "DisassociateDataShareConsumer";
})(GetDisassociateDataShareConsumerActionEnum || (GetDisassociateDataShareConsumerActionEnum = {}));
export var GetDisassociateDataShareConsumerVersionEnum;
(function (GetDisassociateDataShareConsumerVersionEnum) {
    GetDisassociateDataShareConsumerVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDisassociateDataShareConsumerVersionEnum || (GetDisassociateDataShareConsumerVersionEnum = {}));
var GetDisassociateDataShareConsumerQueryParams = /** @class */ (function (_super) {
    __extends(GetDisassociateDataShareConsumerQueryParams, _super);
    function GetDisassociateDataShareConsumerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsumerArn" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerQueryParams.prototype, "consumerArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerQueryParams.prototype, "dataShareArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DisassociateEntireAccount" }),
        __metadata("design:type", Boolean)
    ], GetDisassociateDataShareConsumerQueryParams.prototype, "disassociateEntireAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerQueryParams.prototype, "version", void 0);
    return GetDisassociateDataShareConsumerQueryParams;
}(SpeakeasyBase));
export { GetDisassociateDataShareConsumerQueryParams };
var GetDisassociateDataShareConsumerHeaders = /** @class */ (function (_super) {
    __extends(GetDisassociateDataShareConsumerHeaders, _super);
    function GetDisassociateDataShareConsumerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDisassociateDataShareConsumerHeaders;
}(SpeakeasyBase));
export { GetDisassociateDataShareConsumerHeaders };
var GetDisassociateDataShareConsumerRequest = /** @class */ (function (_super) {
    __extends(GetDisassociateDataShareConsumerRequest, _super);
    function GetDisassociateDataShareConsumerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisassociateDataShareConsumerQueryParams)
    ], GetDisassociateDataShareConsumerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDisassociateDataShareConsumerHeaders)
    ], GetDisassociateDataShareConsumerRequest.prototype, "headers", void 0);
    return GetDisassociateDataShareConsumerRequest;
}(SpeakeasyBase));
export { GetDisassociateDataShareConsumerRequest };
var GetDisassociateDataShareConsumerResponse = /** @class */ (function (_super) {
    __extends(GetDisassociateDataShareConsumerResponse, _super);
    function GetDisassociateDataShareConsumerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDisassociateDataShareConsumerResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDisassociateDataShareConsumerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDisassociateDataShareConsumerResponse.prototype, "statusCode", void 0);
    return GetDisassociateDataShareConsumerResponse;
}(SpeakeasyBase));
export { GetDisassociateDataShareConsumerResponse };
