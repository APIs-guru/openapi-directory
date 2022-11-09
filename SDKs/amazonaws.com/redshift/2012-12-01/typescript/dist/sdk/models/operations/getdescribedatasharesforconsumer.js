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
export var GetDescribeDataSharesForConsumerActionEnum;
(function (GetDescribeDataSharesForConsumerActionEnum) {
    GetDescribeDataSharesForConsumerActionEnum["DescribeDataSharesForConsumer"] = "DescribeDataSharesForConsumer";
})(GetDescribeDataSharesForConsumerActionEnum || (GetDescribeDataSharesForConsumerActionEnum = {}));
export var GetDescribeDataSharesForConsumerStatusEnum;
(function (GetDescribeDataSharesForConsumerStatusEnum) {
    GetDescribeDataSharesForConsumerStatusEnum["Active"] = "ACTIVE";
    GetDescribeDataSharesForConsumerStatusEnum["Available"] = "AVAILABLE";
})(GetDescribeDataSharesForConsumerStatusEnum || (GetDescribeDataSharesForConsumerStatusEnum = {}));
export var GetDescribeDataSharesForConsumerVersionEnum;
(function (GetDescribeDataSharesForConsumerVersionEnum) {
    GetDescribeDataSharesForConsumerVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeDataSharesForConsumerVersionEnum || (GetDescribeDataSharesForConsumerVersionEnum = {}));
var GetDescribeDataSharesForConsumerQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesForConsumerQueryParams, _super);
    function GetDescribeDataSharesForConsumerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ConsumerArn" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerQueryParams.prototype, "consumerArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDataSharesForConsumerQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerQueryParams.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerQueryParams.prototype, "version", void 0);
    return GetDescribeDataSharesForConsumerQueryParams;
}(SpeakeasyBase));
export { GetDescribeDataSharesForConsumerQueryParams };
var GetDescribeDataSharesForConsumerHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesForConsumerHeaders, _super);
    function GetDescribeDataSharesForConsumerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDataSharesForConsumerHeaders;
}(SpeakeasyBase));
export { GetDescribeDataSharesForConsumerHeaders };
var GetDescribeDataSharesForConsumerRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesForConsumerRequest, _super);
    function GetDescribeDataSharesForConsumerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDataSharesForConsumerQueryParams)
    ], GetDescribeDataSharesForConsumerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDataSharesForConsumerHeaders)
    ], GetDescribeDataSharesForConsumerRequest.prototype, "headers", void 0);
    return GetDescribeDataSharesForConsumerRequest;
}(SpeakeasyBase));
export { GetDescribeDataSharesForConsumerRequest };
var GetDescribeDataSharesForConsumerResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesForConsumerResponse, _super);
    function GetDescribeDataSharesForConsumerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDataSharesForConsumerResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForConsumerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeDataSharesForConsumerResponse.prototype, "statusCode", void 0);
    return GetDescribeDataSharesForConsumerResponse;
}(SpeakeasyBase));
export { GetDescribeDataSharesForConsumerResponse };
