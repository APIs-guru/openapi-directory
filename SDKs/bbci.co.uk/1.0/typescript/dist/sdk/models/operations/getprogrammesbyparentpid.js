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
var GetProgrammesByParentPidPathParams = /** @class */ (function (_super) {
    __extends(GetProgrammesByParentPidPathParams, _super);
    function GetProgrammesByParentPidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" }),
        __metadata("design:type", String)
    ], GetProgrammesByParentPidPathParams.prototype, "pid", void 0);
    return GetProgrammesByParentPidPathParams;
}(SpeakeasyBase));
export { GetProgrammesByParentPidPathParams };
var GetProgrammesByParentPidQueryParams = /** @class */ (function (_super) {
    __extends(GetProgrammesByParentPidQueryParams, _super);
    function GetProgrammesByParentPidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetProgrammesByParentPidQueryParams.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" }),
        __metadata("design:type", Number)
    ], GetProgrammesByParentPidQueryParams.prototype, "initialChildCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetProgrammesByParentPidQueryParams.prototype, "rights", void 0);
    return GetProgrammesByParentPidQueryParams;
}(SpeakeasyBase));
export { GetProgrammesByParentPidQueryParams };
var GetProgrammesByParentPidRequest = /** @class */ (function (_super) {
    __extends(GetProgrammesByParentPidRequest, _super);
    function GetProgrammesByParentPidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProgrammesByParentPidPathParams)
    ], GetProgrammesByParentPidRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProgrammesByParentPidQueryParams)
    ], GetProgrammesByParentPidRequest.prototype, "queryParams", void 0);
    return GetProgrammesByParentPidRequest;
}(SpeakeasyBase));
export { GetProgrammesByParentPidRequest };
var GetProgrammesByParentPidResponse = /** @class */ (function (_super) {
    __extends(GetProgrammesByParentPidResponse, _super);
    function GetProgrammesByParentPidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProgrammesByParentPidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProgrammesByParentPidResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProgrammesByParentPidResponse.prototype, "ibl", void 0);
    return GetProgrammesByParentPidResponse;
}(SpeakeasyBase));
export { GetProgrammesByParentPidResponse };
