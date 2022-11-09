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
var GetProgrammeByPidPathParams = /** @class */ (function (_super) {
    __extends(GetProgrammeByPidPathParams, _super);
    function GetProgrammeByPidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=pid" }),
        __metadata("design:type", String)
    ], GetProgrammeByPidPathParams.prototype, "pid", void 0);
    return GetProgrammeByPidPathParams;
}(SpeakeasyBase));
export { GetProgrammeByPidPathParams };
var GetProgrammeByPidQueryParams = /** @class */ (function (_super) {
    __extends(GetProgrammeByPidQueryParams, _super);
    function GetProgrammeByPidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetProgrammeByPidQueryParams.prototype, "availability", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], GetProgrammeByPidQueryParams.prototype, "mixin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetProgrammeByPidQueryParams.prototype, "rights", void 0);
    return GetProgrammeByPidQueryParams;
}(SpeakeasyBase));
export { GetProgrammeByPidQueryParams };
var GetProgrammeByPidRequest = /** @class */ (function (_super) {
    __extends(GetProgrammeByPidRequest, _super);
    function GetProgrammeByPidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetProgrammeByPidPathParams)
    ], GetProgrammeByPidRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetProgrammeByPidQueryParams)
    ], GetProgrammeByPidRequest.prototype, "queryParams", void 0);
    return GetProgrammeByPidRequest;
}(SpeakeasyBase));
export { GetProgrammeByPidRequest };
var GetProgrammeByPidResponse = /** @class */ (function (_super) {
    __extends(GetProgrammeByPidResponse, _super);
    function GetProgrammeByPidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetProgrammeByPidResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetProgrammeByPidResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetProgrammeByPidResponse.prototype, "ibl", void 0);
    return GetProgrammeByPidResponse;
}(SpeakeasyBase));
export { GetProgrammeByPidResponse };
