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
var CreateTeamQueryParams = /** @class */ (function (_super) {
    __extends(CreateTeamQueryParams, _super);
    function CreateTeamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CreateTeamQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], CreateTeamQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateTeamQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateTeamQueryParams.prototype, "optPretty", void 0);
    return CreateTeamQueryParams;
}(SpeakeasyBase));
export { CreateTeamQueryParams };
var CreateTeamRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateTeamRequestBodyInput, _super);
    function CreateTeamRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TeamRequestInput)
    ], CreateTeamRequestBodyInput.prototype, "data", void 0);
    return CreateTeamRequestBodyInput;
}(SpeakeasyBase));
export { CreateTeamRequestBodyInput };
var CreateTeam201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTeam201ApplicationJson, _super);
    function CreateTeam201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TeamResponse)
    ], CreateTeam201ApplicationJson.prototype, "data", void 0);
    return CreateTeam201ApplicationJson;
}(SpeakeasyBase));
export { CreateTeam201ApplicationJson };
var CreateTeamRequest = /** @class */ (function (_super) {
    __extends(CreateTeamRequest, _super);
    function CreateTeamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTeamQueryParams)
    ], CreateTeamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTeamRequestBodyInput)
    ], CreateTeamRequest.prototype, "request", void 0);
    return CreateTeamRequest;
}(SpeakeasyBase));
export { CreateTeamRequest };
var CreateTeamResponse = /** @class */ (function (_super) {
    __extends(CreateTeamResponse, _super);
    function CreateTeamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTeamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateTeamResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTeamResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTeam201ApplicationJson)
    ], CreateTeamResponse.prototype, "createTeam201ApplicationJsonObject", void 0);
    return CreateTeamResponse;
}(SpeakeasyBase));
export { CreateTeamResponse };
