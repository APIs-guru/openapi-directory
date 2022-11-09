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
var GetSectionsForStudentPathParams = /** @class */ (function (_super) {
    __extends(GetSectionsForStudentPathParams, _super);
    function GetSectionsForStudentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSectionsForStudentPathParams.prototype, "id", void 0);
    return GetSectionsForStudentPathParams;
}(SpeakeasyBase));
export { GetSectionsForStudentPathParams };
var GetSectionsForStudentQueryParams = /** @class */ (function (_super) {
    __extends(GetSectionsForStudentQueryParams, _super);
    function GetSectionsForStudentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" }),
        __metadata("design:type", String)
    ], GetSectionsForStudentQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSectionsForStudentQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" }),
        __metadata("design:type", String)
    ], GetSectionsForStudentQueryParams.prototype, "startingAfter", void 0);
    return GetSectionsForStudentQueryParams;
}(SpeakeasyBase));
export { GetSectionsForStudentQueryParams };
var GetSectionsForStudentRequest = /** @class */ (function (_super) {
    __extends(GetSectionsForStudentRequest, _super);
    function GetSectionsForStudentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSectionsForStudentPathParams)
    ], GetSectionsForStudentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSectionsForStudentQueryParams)
    ], GetSectionsForStudentRequest.prototype, "queryParams", void 0);
    return GetSectionsForStudentRequest;
}(SpeakeasyBase));
export { GetSectionsForStudentRequest };
var GetSectionsForStudentResponse = /** @class */ (function (_super) {
    __extends(GetSectionsForStudentResponse, _super);
    function GetSectionsForStudentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSectionsForStudentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.NotFound)
    ], GetSectionsForStudentResponse.prototype, "notFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SectionsResponse)
    ], GetSectionsForStudentResponse.prototype, "sectionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSectionsForStudentResponse.prototype, "statusCode", void 0);
    return GetSectionsForStudentResponse;
}(SpeakeasyBase));
export { GetSectionsForStudentResponse };
