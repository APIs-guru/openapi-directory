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
var GetTeamsQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamsQueryParams, _super);
    function GetTeamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=conference" }),
        __metadata("design:type", String)
    ], GetTeamsQueryParams.prototype, "conference", void 0);
    return GetTeamsQueryParams;
}(SpeakeasyBase));
export { GetTeamsQueryParams };
var GetTeamsRequest = /** @class */ (function (_super) {
    __extends(GetTeamsRequest, _super);
    function GetTeamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTeamsQueryParams)
    ], GetTeamsRequest.prototype, "queryParams", void 0);
    return GetTeamsRequest;
}(SpeakeasyBase));
export { GetTeamsRequest };
var GetTeamsResponse = /** @class */ (function (_super) {
    __extends(GetTeamsResponse, _super);
    function GetTeamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTeamsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTeamsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.Team }),
        __metadata("design:type", Array)
    ], GetTeamsResponse.prototype, "teams", void 0);
    return GetTeamsResponse;
}(SpeakeasyBase));
export { GetTeamsResponse };
