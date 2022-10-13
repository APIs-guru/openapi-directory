package shared

type FormDataContentDisposition struct {
	CreationDate     *string           `multipartForm:"name=creationDate"`
	FileName         *string           `multipartForm:"name=fileName"`
	ModificationDate *string           `multipartForm:"name=modificationDate"`
	Name             *string           `multipartForm:"name=name"`
	Parameters       map[string]string `multipartForm:"name=parameters,json"`
	ReadDate         *string           `multipartForm:"name=readDate"`
	Size             *int32            `multipartForm:"name=size"`
	Type             *string           `multipartForm:"name=type"`
}
