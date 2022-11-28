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
var ScimListProvisionedIdentitiesPathParams = /** @class */ (function (_super) {
    __extends(ScimListProvisionedIdentitiesPathParams, _super);
    function ScimListProvisionedIdentitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ScimListProvisionedIdentitiesPathParams.prototype, "org", void 0);
    return ScimListProvisionedIdentitiesPathParams;
}(SpeakeasyBase));
export { ScimListProvisionedIdentitiesPathParams };
var ScimListProvisionedIdentitiesQueryParams = /** @class */ (function (_super) {
    __extends(ScimListProvisionedIdentitiesQueryParams, _super);
    function ScimListProvisionedIdentitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], ScimListProvisionedIdentitiesQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ScimListProvisionedIdentitiesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], ScimListProvisionedIdentitiesQueryParams.prototype, "startIndex", void 0);
    return ScimListProvisionedIdentitiesQueryParams;
}(SpeakeasyBase));
export { ScimListProvisionedIdentitiesQueryParams };
var ScimListProvisionedIdentitiesRequest = /** @class */ (function (_super) {
    __extends(ScimListProvisionedIdentitiesRequest, _super);
    function ScimListProvisionedIdentitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScimListProvisionedIdentitiesPathParams)
    ], ScimListProvisionedIdentitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScimListProvisionedIdentitiesQueryParams)
    ], ScimListProvisionedIdentitiesRequest.prototype, "queryParams", void 0);
    return ScimListProvisionedIdentitiesRequest;
}(SpeakeasyBase));
export { ScimListProvisionedIdentitiesRequest };
var ScimListProvisionedIdentitiesResponse = /** @class */ (function (_super) {
    __extends(ScimListProvisionedIdentitiesResponse, _super);
    function ScimListProvisionedIdentitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScimListProvisionedIdentitiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScimListProvisionedIdentitiesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], ScimListProvisionedIdentitiesResponse.prototype, "scimError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimUserList)
    ], ScimListProvisionedIdentitiesResponse.prototype, "scimUserList", void 0);
    return ScimListProvisionedIdentitiesResponse;
}(SpeakeasyBase));
export { ScimListProvisionedIdentitiesResponse };
