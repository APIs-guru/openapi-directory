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
var Destiny2GetLinkedProfilesPathParams = /** @class */ (function (_super) {
    __extends(Destiny2GetLinkedProfilesPathParams, _super);
    function Destiny2GetLinkedProfilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" }),
        __metadata("design:type", Number)
    ], Destiny2GetLinkedProfilesPathParams.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" }),
        __metadata("design:type", Number)
    ], Destiny2GetLinkedProfilesPathParams.prototype, "membershipType", void 0);
    return Destiny2GetLinkedProfilesPathParams;
}(SpeakeasyBase));
export { Destiny2GetLinkedProfilesPathParams };
var Destiny2GetLinkedProfilesQueryParams = /** @class */ (function (_super) {
    __extends(Destiny2GetLinkedProfilesQueryParams, _super);
    function Destiny2GetLinkedProfilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=getAllMemberships" }),
        __metadata("design:type", Boolean)
    ], Destiny2GetLinkedProfilesQueryParams.prototype, "getAllMemberships", void 0);
    return Destiny2GetLinkedProfilesQueryParams;
}(SpeakeasyBase));
export { Destiny2GetLinkedProfilesQueryParams };
var Destiny2GetLinkedProfilesRequest = /** @class */ (function (_super) {
    __extends(Destiny2GetLinkedProfilesRequest, _super);
    function Destiny2GetLinkedProfilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetLinkedProfilesPathParams)
    ], Destiny2GetLinkedProfilesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Destiny2GetLinkedProfilesQueryParams)
    ], Destiny2GetLinkedProfilesRequest.prototype, "queryParams", void 0);
    return Destiny2GetLinkedProfilesRequest;
}(SpeakeasyBase));
export { Destiny2GetLinkedProfilesRequest };
var Destiny2GetLinkedProfilesResponse = /** @class */ (function (_super) {
    __extends(Destiny2GetLinkedProfilesResponse, _super);
    function Destiny2GetLinkedProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], Destiny2GetLinkedProfilesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Destiny2GetLinkedProfilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Destiny2GetLinkedProfilesResponse.prototype, "statusCode", void 0);
    return Destiny2GetLinkedProfilesResponse;
}(SpeakeasyBase));
export { Destiny2GetLinkedProfilesResponse };
