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
var OrgsListPublicMembersPathParams = /** @class */ (function (_super) {
    __extends(OrgsListPublicMembersPathParams, _super);
    function OrgsListPublicMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsListPublicMembersPathParams.prototype, "org", void 0);
    return OrgsListPublicMembersPathParams;
}(SpeakeasyBase));
export { OrgsListPublicMembersPathParams };
var OrgsListPublicMembersQueryParams = /** @class */ (function (_super) {
    __extends(OrgsListPublicMembersQueryParams, _super);
    function OrgsListPublicMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], OrgsListPublicMembersQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], OrgsListPublicMembersQueryParams.prototype, "perPage", void 0);
    return OrgsListPublicMembersQueryParams;
}(SpeakeasyBase));
export { OrgsListPublicMembersQueryParams };
var OrgsListPublicMembersRequest = /** @class */ (function (_super) {
    __extends(OrgsListPublicMembersRequest, _super);
    function OrgsListPublicMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListPublicMembersPathParams)
    ], OrgsListPublicMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListPublicMembersQueryParams)
    ], OrgsListPublicMembersRequest.prototype, "queryParams", void 0);
    return OrgsListPublicMembersRequest;
}(SpeakeasyBase));
export { OrgsListPublicMembersRequest };
var OrgsListPublicMembersResponse = /** @class */ (function (_super) {
    __extends(OrgsListPublicMembersResponse, _super);
    function OrgsListPublicMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsListPublicMembersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OrgsListPublicMembersResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsListPublicMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SimpleUser }),
        __metadata("design:type", Array)
    ], OrgsListPublicMembersResponse.prototype, "simpleUsers", void 0);
    return OrgsListPublicMembersResponse;
}(SpeakeasyBase));
export { OrgsListPublicMembersResponse };
