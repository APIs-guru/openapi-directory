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
var GetBehaviorsQueryParams = /** @class */ (function (_super) {
    __extends(GetBehaviorsQueryParams, _super);
    function GetBehaviorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=behavior" }),
        __metadata("design:type", String)
    ], GetBehaviorsQueryParams.prototype, "behavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetBehaviorsQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", Map)
    ], GetBehaviorsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gt" }),
        __metadata("design:type", Map)
    ], GetBehaviorsQueryParams.prototype, "filterGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" }),
        __metadata("design:type", Map)
    ], GetBehaviorsQueryParams.prototype, "filterGteq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_like" }),
        __metadata("design:type", Map)
    ], GetBehaviorsQueryParams.prototype, "filterLike", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lt" }),
        __metadata("design:type", Map)
    ], GetBehaviorsQueryParams.prototype, "filterLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" }),
        __metadata("design:type", Map)
    ], GetBehaviorsQueryParams.prototype, "filterLteq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetBehaviorsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], GetBehaviorsQueryParams.prototype, "sortBy", void 0);
    return GetBehaviorsQueryParams;
}(SpeakeasyBase));
export { GetBehaviorsQueryParams };
var GetBehaviorsRequest = /** @class */ (function (_super) {
    __extends(GetBehaviorsRequest, _super);
    function GetBehaviorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBehaviorsQueryParams)
    ], GetBehaviorsRequest.prototype, "queryParams", void 0);
    return GetBehaviorsRequest;
}(SpeakeasyBase));
export { GetBehaviorsRequest };
var GetBehaviorsResponse = /** @class */ (function (_super) {
    __extends(GetBehaviorsResponse, _super);
    function GetBehaviorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BehaviorEntity }),
        __metadata("design:type", Array)
    ], GetBehaviorsResponse.prototype, "behaviorEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBehaviorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBehaviorsResponse.prototype, "statusCode", void 0);
    return GetBehaviorsResponse;
}(SpeakeasyBase));
export { GetBehaviorsResponse };
