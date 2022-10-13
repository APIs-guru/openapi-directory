package operations

type PostUserAvatarUsernameRefreshGravatarJSONPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostUserAvatarUsernameRefreshGravatarJSONRequest struct {
	PathParams PostUserAvatarUsernameRefreshGravatarJSONPathParams
}

type PostUserAvatarUsernameRefreshGravatarJSONResponse struct {
	ContentType                                                    string
	PostUserAvatarUsernameRefreshGravatarJSON200ApplicationJSONAny *interface{}
	StatusCode                                                     int64
}
