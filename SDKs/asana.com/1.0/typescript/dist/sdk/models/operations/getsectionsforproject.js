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
var GetSectionsForProjectPathParams = /** @class */ (function (_super) {
    __extends(GetSectionsForProjectPathParams, _super);
    function GetSectionsForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" }),
        __metadata("design:type", String)
    ], GetSectionsForProjectPathParams.prototype, "projectGid", void 0);
    return GetSectionsForProjectPathParams;
}(SpeakeasyBase));
export { GetSectionsForProjectPathParams };
var GetSectionsForProjectQueryParams = /** @class */ (function (_super) {
    __extends(GetSectionsForProjectQueryParams, _super);
    function GetSectionsForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSectionsForProjectQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetSectionsForProjectQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetSectionsForProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetSectionsForProjectQueryParams.prototype, "optPretty", void 0);
    return GetSectionsForProjectQueryParams;
}(SpeakeasyBase));
export { GetSectionsForProjectQueryParams };
var GetSectionsForProject200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSectionsForProject200ApplicationJson, _super);
    function GetSectionsForProject200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.SectionCompact }),
        __metadata("design:type", Array)
    ], GetSectionsForProject200ApplicationJson.prototype, "data", void 0);
    return GetSectionsForProject200ApplicationJson;
}(SpeakeasyBase));
export { GetSectionsForProject200ApplicationJson };
var GetSectionsForProjectRequest = /** @class */ (function (_super) {
    __extends(GetSectionsForProjectRequest, _super);
    function GetSectionsForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSectionsForProjectPathParams)
    ], GetSectionsForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSectionsForProjectQueryParams)
    ], GetSectionsForProjectRequest.prototype, "queryParams", void 0);
    return GetSectionsForProjectRequest;
}(SpeakeasyBase));
export { GetSectionsForProjectRequest };
var GetSectionsForProjectResponse = /** @class */ (function (_super) {
    __extends(GetSectionsForProjectResponse, _super);
    function GetSectionsForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSectionsForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetSectionsForProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSectionsForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSectionsForProject200ApplicationJson)
    ], GetSectionsForProjectResponse.prototype, "getSectionsForProject200ApplicationJsonObject", void 0);
    return GetSectionsForProjectResponse;
}(SpeakeasyBase));
export { GetSectionsForProjectResponse };
