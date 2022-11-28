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
var GetProjectUsernameProjectBuildNumTestsPathParams = /** @class */ (function (_super) {
    __extends(GetProjectUsernameProjectBuildNumTestsPathParams, _super);
    function GetProjectUsernameProjectBuildNumTestsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=build_num" }),
        __metadata("design:type", Number)
    ], GetProjectUsernameProjectBuildNumTestsPathParams.prototype, "buildNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], GetProjectUsernameProjectBuildNumTestsPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetProjectUsernameProjectBuildNumTestsPathParams.prototype, "username", void 0);
    return GetProjectUsernameProjectBuildNumTestsPathParams;
}(SpeakeasyBase));
export { GetProjectUsernameProjectBuildNumTestsPathParams };
var GetProjectUsernameProjectBuildNumTestsRequest = /** @class */ (function (_super) {
    __extends(GetProjectUsernameProjectBuildNumTestsRequest, _super);
    function GetProjectUsernameProjectBuildNumTestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectUsernameProjectBuildNumTestsPathParams)
    ], GetProjectUsernameProjectBuildNumTestsRequest.prototype, "pathParams", void 0);
    return GetProjectUsernameProjectBuildNumTestsRequest;
}(SpeakeasyBase));
export { GetProjectUsernameProjectBuildNumTestsRequest };
var GetProjectUsernameProjectBuildNumTestsResponse = /** @class */ (function (_super) {
    __extends(GetProjectUsernameProjectBuildNumTestsResponse, _super);
    function GetProjectUsernameProjectBuildNumTestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectUsernameProjectBuildNumTestsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectUsernameProjectBuildNumTestsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tests)
    ], GetProjectUsernameProjectBuildNumTestsResponse.prototype, "tests", void 0);
    return GetProjectUsernameProjectBuildNumTestsResponse;
}(SpeakeasyBase));
export { GetProjectUsernameProjectBuildNumTestsResponse };
