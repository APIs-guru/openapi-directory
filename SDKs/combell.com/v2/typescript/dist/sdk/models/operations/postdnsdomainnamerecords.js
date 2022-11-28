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
import * as shared from "../shared";
var PostDnsDomainNameRecordsPathParams = /** @class */ (function (_super) {
    __extends(PostDnsDomainNameRecordsPathParams, _super);
    function PostDnsDomainNameRecordsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], PostDnsDomainNameRecordsPathParams.prototype, "domainName", void 0);
    return PostDnsDomainNameRecordsPathParams;
}(SpeakeasyBase));
export { PostDnsDomainNameRecordsPathParams };
var PostDnsDomainNameRecordsQueryParams = /** @class */ (function (_super) {
    __extends(PostDnsDomainNameRecordsQueryParams, _super);
    function PostDnsDomainNameRecordsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], PostDnsDomainNameRecordsQueryParams.prototype, "domainName", void 0);
    return PostDnsDomainNameRecordsQueryParams;
}(SpeakeasyBase));
export { PostDnsDomainNameRecordsQueryParams };
var PostDnsDomainNameRecordsRequest = /** @class */ (function (_super) {
    __extends(PostDnsDomainNameRecordsRequest, _super);
    function PostDnsDomainNameRecordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDnsDomainNameRecordsPathParams)
    ], PostDnsDomainNameRecordsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDnsDomainNameRecordsQueryParams)
    ], PostDnsDomainNameRecordsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DnsRecord)
    ], PostDnsDomainNameRecordsRequest.prototype, "request", void 0);
    return PostDnsDomainNameRecordsRequest;
}(SpeakeasyBase));
export { PostDnsDomainNameRecordsRequest };
var PostDnsDomainNameRecordsResponse = /** @class */ (function (_super) {
    __extends(PostDnsDomainNameRecordsResponse, _super);
    function PostDnsDomainNameRecordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDnsDomainNameRecordsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostDnsDomainNameRecordsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDnsDomainNameRecordsResponse.prototype, "statusCode", void 0);
    return PostDnsDomainNameRecordsResponse;
}(SpeakeasyBase));
export { PostDnsDomainNameRecordsResponse };
