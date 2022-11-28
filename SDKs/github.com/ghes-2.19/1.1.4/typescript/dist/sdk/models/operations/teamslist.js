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
var TeamsListPathParams = /** @class */ (function (_super) {
    __extends(TeamsListPathParams, _super);
    function TeamsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], TeamsListPathParams.prototype, "org", void 0);
    return TeamsListPathParams;
}(SpeakeasyBase));
export { TeamsListPathParams };
var TeamsListQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListQueryParams, _super);
    function TeamsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListQueryParams.prototype, "perPage", void 0);
    return TeamsListQueryParams;
}(SpeakeasyBase));
export { TeamsListQueryParams };
var TeamsListRequest = /** @class */ (function (_super) {
    __extends(TeamsListRequest, _super);
    function TeamsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListPathParams)
    ], TeamsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TeamsListQueryParams)
    ], TeamsListRequest.prototype, "queryParams", void 0);
    return TeamsListRequest;
}(SpeakeasyBase));
export { TeamsListRequest };
var TeamsListResponse = /** @class */ (function (_super) {
    __extends(TeamsListResponse, _super);
    function TeamsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TeamsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], TeamsListResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TeamsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], TeamsListResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Team }),
        __metadata("design:type", Array)
    ], TeamsListResponse.prototype, "teams", void 0);
    return TeamsListResponse;
}(SpeakeasyBase));
export { TeamsListResponse };
