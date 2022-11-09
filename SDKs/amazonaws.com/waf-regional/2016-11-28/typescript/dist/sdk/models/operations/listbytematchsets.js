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
import * as shared from "../shared";
export var ListByteMatchSetsXAmzTargetEnum;
(function (ListByteMatchSetsXAmzTargetEnum) {
    ListByteMatchSetsXAmzTargetEnum["AwswafRegional20161128ListByteMatchSets"] = "AWSWAF_Regional_20161128.ListByteMatchSets";
})(ListByteMatchSetsXAmzTargetEnum || (ListByteMatchSetsXAmzTargetEnum = {}));
var ListByteMatchSetsHeaders = /** @class */ (function (_super) {
    __extends(ListByteMatchSetsHeaders, _super);
    function ListByteMatchSetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListByteMatchSetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListByteMatchSetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListByteMatchSetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListByteMatchSetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListByteMatchSetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListByteMatchSetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListByteMatchSetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListByteMatchSetsHeaders.prototype, "xAmzTarget", void 0);
    return ListByteMatchSetsHeaders;
}(SpeakeasyBase));
export { ListByteMatchSetsHeaders };
var ListByteMatchSetsRequest = /** @class */ (function (_super) {
    __extends(ListByteMatchSetsRequest, _super);
    function ListByteMatchSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListByteMatchSetsHeaders)
    ], ListByteMatchSetsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListByteMatchSetsRequest)
    ], ListByteMatchSetsRequest.prototype, "request", void 0);
    return ListByteMatchSetsRequest;
}(SpeakeasyBase));
export { ListByteMatchSetsRequest };
var ListByteMatchSetsResponse = /** @class */ (function (_super) {
    __extends(ListByteMatchSetsResponse, _super);
    function ListByteMatchSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListByteMatchSetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListByteMatchSetsResponse)
    ], ListByteMatchSetsResponse.prototype, "listByteMatchSetsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListByteMatchSetsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListByteMatchSetsResponse.prototype, "wafInternalErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListByteMatchSetsResponse.prototype, "wafInvalidAccountException", void 0);
    return ListByteMatchSetsResponse;
}(SpeakeasyBase));
export { ListByteMatchSetsResponse };
