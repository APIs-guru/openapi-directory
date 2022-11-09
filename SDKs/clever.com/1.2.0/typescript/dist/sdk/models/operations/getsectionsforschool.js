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
var GetSectionsForSchoolPathParams = /** @class */ (function (_super) {
    __extends(GetSectionsForSchoolPathParams, _super);
    function GetSectionsForSchoolPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSectionsForSchoolPathParams.prototype, "id", void 0);
    return GetSectionsForSchoolPathParams;
}(SpeakeasyBase));
export { GetSectionsForSchoolPathParams };
var GetSectionsForSchoolQueryParams = /** @class */ (function (_super) {
    __extends(GetSectionsForSchoolQueryParams, _super);
    function GetSectionsForSchoolQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" }),
        __metadata("design:type", String)
    ], GetSectionsForSchoolQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSectionsForSchoolQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetSectionsForSchoolQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=where" }),
        __metadata("design:type", String)
    ], GetSectionsForSchoolQueryParams.prototype, "where", void 0);
    return GetSectionsForSchoolQueryParams;
}(SpeakeasyBase));
export { GetSectionsForSchoolQueryParams };
var GetSectionsForSchoolRequest = /** @class */ (function (_super) {
    __extends(GetSectionsForSchoolRequest, _super);
    function GetSectionsForSchoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSectionsForSchoolPathParams)
    ], GetSectionsForSchoolRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSectionsForSchoolQueryParams)
    ], GetSectionsForSchoolRequest.prototype, "queryParams", void 0);
    return GetSectionsForSchoolRequest;
}(SpeakeasyBase));
export { GetSectionsForSchoolRequest };
var GetSectionsForSchoolResponse = /** @class */ (function (_super) {
    __extends(GetSectionsForSchoolResponse, _super);
    function GetSectionsForSchoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSectionsForSchoolResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFound)
    ], GetSectionsForSchoolResponse.prototype, "notFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SectionsResponse)
    ], GetSectionsForSchoolResponse.prototype, "sectionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSectionsForSchoolResponse.prototype, "statusCode", void 0);
    return GetSectionsForSchoolResponse;
}(SpeakeasyBase));
export { GetSectionsForSchoolResponse };
